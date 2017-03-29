Simple title search component for jekyll.

![](./demo.gif)

Add the following html to your page

```html
<div id="search">
  <search></search>
<div>
```

Then place the following scripts to the end of your layout file or use cdns

```html
<script type="text/javascript" src="{{ site.baseurl }}/public/js/vendor/jquery-3.2.0.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/public/js/vendor/underscore-min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/public/js//vendor/vue.js"></script>

<script type="text/javascript" src="{{ site.baseurl }}/public/js/search.js"></script>

```

Add `post.json` to the root of your project
