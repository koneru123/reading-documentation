// Your code here!
var chart = c3.generate({
  data: {
      columns: [
        ['sleep', value],
        ['eat', value],
        ['code', value],
        ['relax', value],
        ['other', value]
      ],
      type: 'pie',
      colors: {
        sleep: '#D81159',
        eat: '#8F2D56',
        code: '#218380',
        relax: '#FBB13C',
        other: '#726DA8'
      },
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return `${value} hours`;
        }
      }
    },
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
});

