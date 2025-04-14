# Type conversion

## To boolean

```js
!variable;
!!variable;
Boolean(variable); // !!
if (variable);
variable ? ifCondition : elseCondition;
while (variable);
operators >= <= ;
 2 === '2' // type data
 2 == '2' // number conversion

```

## To number

```js
Number(number);
parseInt(variable);
parseFloat(variable);
+variable;
"2" * 2 = 4;
"2" / 2 = 1;
"2" - 2 = 0;
```

## To string

```js
"2" + 2 = "22";
'' + null = 'null'
number.toString();
`string ${number}` // string
String(variable);
```

## Type check

```js
typeof variable === 'number';
typeof NaN === 'number'; // true;
NaN === NaN; // false;
```
