# Multiple Calculator

Aplikazio honek zenbaki eta operazio zerrenda bat jasoko du parametro bidez eta bata bestearen atzetik exekutatu behar ditu. Operazio posibleak batuketa (+), kenketa (-), biderkaketa (x) eta zatiketa (/) dira. Ondorengoak dira exekuzio adibide batzuk.

```js
result = multipleCalculater.calculate(["4", "+2"]);
// resul: 6
result = multipleCalculater.calculate(["4", "+2", "-1"]);
// resul: 5
result = multipleCalculater.calculate(["4", "+2", "/3"]);
// resul: 2
result = multipleCalculater.calculate(["4", "+2", "/3", "x2"]);
// resul: 4
```

## Egin beharrekoa

#### 1. zatia
- [ ] 2 zenbakiren artean 4 operazioak inplementatu (*parametrized tests*, [nunit](https://www.lambdatest.com/blog/nunit-parameterized-test-examples/), [junit](https://reflectoring.io/tutorial-junit5-parameterized-tests/), [jest](https://jestjs.io/docs/api#testeachtablename-fn-timeout))
- [ ] operazioa ez badago 4 aukera posibleen artean errore bat jaurti
- [ ] operazioa falta bada kasuren batean errore bat jaurti (`!isNaN(parseInt(operation))`)
- [ ] zenbakiren bat falta bada errore bat jaurti
- [ ] zatitzailea 0 bada errore bat jaurti
- [ ] 2 zenbaki baino gehiagoren artean 4 operazioak inplementatu
- [ ] zenbaki negatiboak onartu behar dira operazioetan

#### 2. zatia
- [ ] negatiborik gabeko bertsioa egin (flag baten bidez). Ez da zenbaki negatiborik onartuko operazioetarako. Kenketaren kasuan gainera, emaitza negatiboa ez izatea ere begiratuko da. Kasu guztietan errore bat jaurti. (test coverage)
- [ ] birfaktorizatu flag-aren ordez, PositiveCalculator eta NegativeCalculator implementatzeko (always in green)
- [ ] [mock](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c) erabili `calculator`-a ordezkatzeko eta soilik utzi erregela propioak eta mock deiak testetan. `MultipleCalculator`eko gainontzeko testak bi "composer"-etara pasa.

---

### Nola erabili

#### Dependentziak instalatu

```bash
npm install
```

#### Testak behin exekutatu

```bash
npm test
```

#### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

#### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

#### Lintern erroreak egiaztatu

```bash
npm run lint
```

#### Lintern erroreak zuzendu

```bash
npm run lint:fix
```

### Hook-ak

Proiektuak `pre-commit` hook bat dakar `commit` egiten den bakoitzean automatikoki testak exekutatu ditzan.

Hau ekidin nahi bada `--no-verify` erabil daiteke `commit` egiterakoan.
