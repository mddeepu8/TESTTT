function toEntry(row) {
    return {
        label: row.name,
        quadrant: ['Bottom Right', 'Bottom Left', 'Top Left', 'Top Right'].indexOf(row.quadrant),
        ring: ['INNER', 'SECOND', 'THIRD', 'OUTER'].indexOf(row.ring),
        link: row.link,
        moved: ['down', 'none', 'up'].indexOf(row.moved) - 1,
        active: true
    }
}
function draw_radar(my_entries) {
    radar_visualization({
        entries: my_entries
    });
}
fetch('C:\Users\320163895\OneDrive - Philips.new1.csv')
    .then(function (resp) {
        return resp.text();
    })
    .then(function (csv) {
        var entries = new1.csvParse(csv, function (row) {
            return toEntry(row);
        });
        draw_radar(entries);
    });
