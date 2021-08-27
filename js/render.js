function renderList(data) {
    const sample = $('#item-sample');
    for (let i = 0; i < data.length; i++) {
        let item = null;
        item = sample.clone();
        item.attr('id', `item-${i}`);
        item.attr('href', `/${data[i].link}/index.html`);
        item.find('.title').text(data[i].title);
        item.find('.date').text(data[i].date);
        item.find('.context').text(data[i].context);
        item.appendTo('#slide-list');
    }
}

$(document).ready(function () {
    $.getJSON('data.json', function (data) {
        renderList(data);
    });
});