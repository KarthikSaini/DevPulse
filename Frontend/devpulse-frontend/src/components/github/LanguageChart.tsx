import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

interface LanguageChartProps {
    languages: Record<string, number>;
}

const COLORS = [
    "#2563eb",
    "#3b82f6",
    "#60a5fa",
    "#93c5fd",
    "#1d4ed8",
    "#38bdf8"
];

function LanguageChart({ languages }: LanguageChartProps) {

    const data = Object.entries(languages).map(([language, count]) => ({
        name: language,
        value: count
    }));

    return (

        <div className="chart-card">

            <div className="chart-header">

                <div>

                    <h2>Language Distribution</h2>

                    <p>Languages used across your repositories</p>

                </div>

            </div>

            <div className="pie-wrapper">

                <ResponsiveContainer width="100%" height={300}>

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={65}
                            outerRadius={95}
                            paddingAngle={3}
                        >

                            {data.map((_, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="language-list">

                {data.map((language, index) => (

                    <div
                        className="language-item"
                        key={language.name}
                    >

                        <div className="language-left">

                            <span
                                className="language-dot"
                                style={{
                                    background:
                                        COLORS[index % COLORS.length]
                                }}
                            />

                            <span>{language.name}</span>

                        </div>

                        <strong>{language.value} Repos</strong>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default LanguageChart;