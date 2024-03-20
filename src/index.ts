// Enum : group of constants

enum Size {
  small,
  medium,
  large,
}
console.log(Size.small); // 0
console.log(Size.medium); // 1 (0+1)
console.log(Size.large); // 2 (0+1+1)

enum Size1 {
  small = "s",
  medium = 1,
  large,
}
console.log(Size1.small); // s
console.log(Size1.medium); // 1
console.log(Size1.large); // 2

enum Size2 {
  small = "s",
  medium = 2,
  large = [1, 2, 3],
}
console.log(Size1.small);
console.log(Size1.medium);
console.log(Size1.large); // error, enum can take only string and number type
