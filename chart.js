// Your code here!
var chart = c3.generate({
  data: {
      // iris data from R
      columns: [
        ['sleep', 8],
        ['eat', 3],
        ['code', 7],
        ['relax', 2],
        ['other', 4]
      ],
      type : 'pie',
      colors: {
        sleep: '#D81159',
        eat: '#8F2D56',
        code: '#218380',
        relax: '#FBB13C',
        other: '#726DA8'
      },
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  }
});