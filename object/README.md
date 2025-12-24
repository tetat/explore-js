# JavaScript Object

## JS Object Accessors

ECMASript 5 (ES5 2009) introduced Getter and Setters.
Getters and Setters allow you to define Object Accessors (Computed Properties).

### Keywords

`get` and `set`

### Why Using Getters and Setters?

- It gives simpler syntax
- It allows equal syntax for properties and methods
- It can secure better data quality
- It is useful for doing things behind-the-scenes

### Object.defineProperty()

The `Object.defineProperty()` method can also be used to add Getters and Setters:

```bash
// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
// Play with the counter:
obj.reset;
```

### More tutos

<div>
    <a href="https://www.w3schools.com/js/js_object_accessors.asp" target="_blank">
    w3schools
    </a>
</div>
<div>
    <a href="https://www.youtube.com/watch?v=WQ1iiWgtTxQ&list=PLHiZ4m8vCp9OkrURufHpGUUTBjJhO9Ghy&index=67" target="_blank">
    Lern with Sumit
    </a>
</div>
