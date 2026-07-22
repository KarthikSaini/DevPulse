import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";

interface ActivityChartProps {
    activity: Record<string, number>;
}

function ActivityChart({ activity }: ActivityChartProps) {

    // Convert object to array
    const data = Object.entries(activity).map(([label, commits]) => {

    const [day, date, month] = label.split(" ");

    return {
        day,
        date: `${date} ${month}`,
        commits
    };

});

    return (

        <div className="chart-card">

            <h2>Weekly Activity</h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}
                             margin={{
                                top: 20,
                                right: 25,
                                left: 10,
                                bottom: 40
                            }} >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="day"
                        interval={0}
                        tick={({ x, y, payload }) => {

                            const item = data.find(d => d.day === payload.value);

                            return (

                                <g transform={`translate(${x},${y})`}>

                                    <text
                                        x={0}
                                        y={0}
                                        dy={16}
                                        textAnchor="middle"
                                        fontWeight="600"
                                    >
                                        {item?.day}
                                    </text>

                                    <text
                                        x={0}
                                        y={18}
                                        dy={16}
                                        textAnchor="middle"
                                        fill="#6b7280"
                                        fontSize={12}
                                    >
                                        {item?.date}
                                    </text>

                                </g>

                            );

                        }}
                    />

                    <YAxis allowDecimals={false} />

                    <Tooltip
                        formatter={(value) => [`${value} activities`, "Count"]}
                        labelFormatter={(label) => {
                            const item = data.find(d => d.day === label);
                            return `${item?.day} ${item?.date}`;
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="commits"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ActivityChart;