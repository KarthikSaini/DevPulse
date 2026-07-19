import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface Props {
    submissionCalendar: Record<string, number>;
}

function LeetcodeHeatmap({ submissionCalendar }: Props) {

    const values = Object.entries(submissionCalendar).map(
        ([timestamp, count]) => ({

            date: new Date(Number(timestamp) * 1000)
                .toISOString()
                .split("T")[0],

            count
        })
    );

    return (

        <div className="heatmap-card">

            <h2>Submission Heatmap</h2>

            <CalendarHeatmap

                startDate={
                    new Date(
                        new Date().setFullYear(
                            new Date().getFullYear() - 1
                        )
                    )
                }

                endDate={new Date()}

                values={values}

                classForValue={(value) => {

                    if (!value || value.count === 0)
                        return "color-empty";

                    if (value.count <= 2)
                        return "color-github-1";

                    if (value.count <= 5)
                        return "color-github-2";

                    if (value.count <= 10)
                        return "color-github-3";

                    return "color-github-4";

                }}

                tooltipDataAttrs={(value: any) => {

                    if (!value)
                        return {};

                    return {
                        "data-tip":
                            `${value.date} : ${value.count} submissions`
                    };

                }}

            />

        </div>

    );
}

export default LeetcodeHeatmap;