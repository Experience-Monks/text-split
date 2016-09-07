# text-split
Utility for splitting text into chunks based on regex.

##Installation
```
$npm install text-split
$import text-split from 'text-split';
```


##Usage

**html**
```
<p id="text-box">
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
```
**javascript**
```
const textBox = document.getElementById("text-box");
text-split(textBox, ', but');
```

result will look like this 
```
[
  <span>It has survived not only five centuries</span>,
  <span> also the leap into electronic typesetting, remaining essentially unchanged.</span>
]
```
