import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Tooltip,

    Cell,

    Legend

} from "recharts";

const data = [

    {

        name: "Java",

        value: 45

    },

    {

        name: "React",

        value: 25

    },

    {

        name: "Spring Boot",

        value: 15

    },

    {

        name: "Docker",

        value: 10

    },

    {

        name: "AWS",

        value: 5

    }

];

const COLORS = [

    "#2563eb",

    "#10b981",

    "#f59e0b",

    "#ef4444",

    "#8b5cf6"

];

function LanguageChart() {

    return (

        <div className="chart-card">

            <h2>Languages</h2>

            <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={100}

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))

                        }

                    </Pie>

                    <Legend/>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default LanguageChart;