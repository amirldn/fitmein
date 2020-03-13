// the input is an array, where graph[i][j] is the time it takes
// to travel from i to j
// graph[i][i] = infinity, i.e. a very big number, i.e. 0x3f3f3f3f
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// the output is an array of 2 elements
// the first element is the minimum time it takes to travel
// the second element is an array of 'nodes' elements
// that represent the labels of the locations we go through, in order
// where nodes is the number of locations we go through

function itinerary(graph[][])
{
  // declare
  const INF = 0x3f3f3f3f;
  var nodes = no_pairs, minim = INF;

  var parent = new Array(nodes);
  var vis = new Array(nodes);

  var dp = new Array(1 << nodes);
  for (int i = 0; i < (1 << nodes); ++i)
    dp[i] = new Array(nodes);
  var from = new Array(1 << nodes);
  for (int i = 0; i < (1 << nodes); ++i)
    from[i] = new Array(nodes);

  // init dp
  for (var i = 0; i < (1 << nodes); ++i)
    for (var j = 0; j < nodes; ++j)
      dp[i][j] = INF;
  for (var i = 0; i < nodes; ++i)
    dp[(1 << i)][i] = 0;

  // init parent
  for (var i = 0; i < nodes; ++i)
    parent[i][j] = -1;

  //init vis
  for (var i = 0; i < nodes; ++i)
    vis[i] = 0;

  for (var i = 0; i < (1 << nodes); ++i)
    for (var j = 0; j < nodes; ++j)
      if (i & (1 << j))
        for (var k = 0; k < n; ++k)
          if (j != k && (i & (1 << k)))
          {
            dp[i][j] = min(dp[i][j], dp[i ^ (1 << j)][k]) + graph[j][k];
            from[i][k] = j;
          }

  var last = -1;
  for (var i = 0; i < n; ++i)
      if (minim > dp[(1 << n) - 1][i])
      {
          minim = dp[(1 << n) - 1][i];
          last = i;
      }

  var ans = new Array(2);
  ans[1] = new Array(nodes);
  ans.append(minim);
  ans[1].append(last);
  var mask = (1 << n) - 1;
  for (var tries = 1; tries < n; ++tries)
  {
    parent[last] = from[mask][last];
    mask ^= (1 << last);
    last = parent[last];
    ans.append(last)
  }
}
