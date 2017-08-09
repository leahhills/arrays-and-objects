Classes are functions that make objects
Classes should start with Capital letters

```javascript
class Dog {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  bark() {
    console.log("bark")
  }
}

var clifford = new Dog("big", "red");
```
