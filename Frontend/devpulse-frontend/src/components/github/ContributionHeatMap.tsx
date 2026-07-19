import CalendarHeatmap from "react-calendar-heatmap";
import "./CSS/ContributionHeatMap.css";

interface Props {
    heatmap: Record<string, number>;
}

function ContributionHeatMap({ heatmap }: Props) {

    const values = Object.entries(heatmap).map(([date, count]) => ({
        date,
        count
    }));

    return (

        <div className="heatmap-card">

            <h2>Contribution Heatmap</h2>

            <CalendarHeatmap
                startDate={new Date(Object.keys(heatmap)[0])}
                endDate={new Date()}
                values={values}
                classForValue={(value) => {

                    if (!value || value.count === 0)
                        return "color-empty";

                    if (value.count <= 2)
                        return "color-github-1";

                    if (value.count <= 4)
                        return "color-github-2";

                    if (value.count <= 6)
                        return "color-github-3";

                    return "color-github-4";
                }}
                tooltipDataAttrs={(value: any) => {

                    if (!value)
                        return {};

                    return {
                        "data-tip": `${value.date} : ${value.count} contributions`
                    };

                }}
            />

        </div>

    );

}

export default ContributionHeatMap;