$(document).ready(function () {
    var table_calendar = `
    <table class = "table-responsive-lg">
        <tr>
            <th>BUỔI</th>
            <th>THỨ 2</th>
            <th>THỨ 3</th>
            <th>THỨ 4</th>
            <th>THỨ 5</th>
            <th>THỨ 6</th>
            <th>THỨ 7</th>
            <th>CHỦ NHẬT</th>
        </tr>
    `;

    for (var i = 1; i <= 24; i++) //24h trong 1 ngày
        table_calendar += `
        <tr>
            <td>    </td>
            <td>    </td>
            <td>    </td>
            <td>    </td>
            <td>    </td>
            <td>    </td>
            <td>    </td>
            <td>    </td>
        </tr>`;

    table_calendar += `</table>`;
    $("#calendar").html(table_calendar);
});