import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";

const data = [

    { day: "Mon", commits: 3 },

    { day: "Tue", commits: 7 },

    { day: "Wed", commits: 5 },

    { day: "Thu", commits: 10 },

    { day: "Fri", commits: 8 },

    { day: "Sat", commits: 12 },

    { day: "Sun", commits: 9 }

];

function ActivityChart() {

    return (

        <div className="chart-card">

            <h2>Weekly Activity</h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="day"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        type="monotone"
                        dataKey="commits"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ActivityChart;