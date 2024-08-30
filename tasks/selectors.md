# Selectors

## Create markup from selector

**Goal** - create HTML where a button matches selector

```css
main#main .aside + .article .section > ul > li.item + li.item > button[disabled] {
}
```

## Create selector

**Goal** - create selectors for elements that starts from 'goal-'. Make a selector as specific as possible.

```html
<header></header>
<main>
  <section class="section first-section">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam corrupti aut doloribus
      accusamus nihil debitis nulla autem? Dignissimos dicta reprehenderit nesciunt quis ab eius,
      vitae assumenda totam molestiae a.
    </p>
  </section>

  <section class="section"></section>
  <section>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nihil! Sed, iste!
      Blanditiis, officiis temporibus minima totam magnam harum suscipit quo corporis tempore
      debitis! Doloremque porro harum iure deserunt? Aliquid.
    </p>
    <div>Some unknown block</div>
    <p class="goal-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam molestias autem?
      Eveniet, commodi cupiditate quaerat officiis quae earum adipisci debitis nesciunt suscipit
      deserunt, quasi fugit? Rem accusamus cum officiis.
    </p>
    <nav id="navigation">
      <ul>
        <li>
          List item #1
          <ul>
            <li>First</li>
            <li>
              <a href="/home">Home</a>
              <a id="home-page" href="/about" class="goal-2">About</a>
            </li>
          </ul>
        </li>
        <li>List item #2</li>
      </ul>
    </nav>
  </section>
</main>

<footer class="footer">
  <h2>Heading</h2>
  <div>
    <h3>Heading</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium earum ad!
      Temporibus, enim laboriosam vero, quaerat neque sequi nesciunt commodi illum quis praesentium
      nam ea impedit, pariatur ipsa consectetur?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem eaque aliquam
      provident repellendus maiores ipsa consectetur molestias, culpa unde laborum id consequatur!
      Iusto magni quidem quis, sapiente at unde?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dignissimos veritatis eveniet
      voluptatem, excepturi sequi nostrum et sapiente cupiditate dolores illo quas ipsa, quaerat
      exercitationem impedit? Veniam quod quia provident?
    </p>
  </div>
  <div>
    <h3>Heading</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium earum ad!
      Temporibus, enim laboriosam vero, quaerat neque sequi nesciunt commodi illum quis praesentium
      nam ea impedit, pariatur ipsa consectetur?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem eaque aliquam
      provident repellendus maiores ipsa consectetur molestias, culpa unde laborum id consequatur!
      Iusto magni quidem quis, sapiente at unde?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dignissimos veritatis eveniet
      voluptatem, excepturi sequi nostrum et sapiente cupiditate dolores illo quas ipsa, quaerat
      exercitationem impedit? Veniam quod quia provident?
    </p>
  </div>
  <div>
    <h3>Heading</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium earum ad!
      Temporibus, enim laboriosam vero, quaerat neque sequi nesciunt commodi illum quis praesentium
      nam ea impedit, pariatur ipsa consectetur?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem eaque aliquam
      provident repellendus maiores ipsa consectetur molestias, culpa unde laborum id consequatur!
      Iusto magni quidem quis, sapiente at unde?
    </p>
    <p class="goal-3">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dignissimos veritatis eveniet
      voluptatem, excepturi sequi nostrum et sapiente cupiditate dolores illo quas ipsa, quaerat
      exercitationem impedit? Veniam quod quia provident?
    </p>
  </div>
</footer>
```

```css
/* Add your selectors here */
```

## UI elements. Part 1

**Goal** - create reusable styles a button and a link. Use css-variables for common colors.

### For button and link

- Font size - 14px
- Font - Montserrat; use google fonts.

### For button

Common:

- Button color - #fff.

States:

- Default background-color - #45b759
- Hover background-color - #379247
- Active background-color - #1b4823
- Focus style - same as default color, but add border 2px of the same color
- Disabled background-color - #a0a0a0.

**Bonus goal**: make button corners rounded - 5px.

```css
/* Styles for button */
```

### For link

- Default, hover, active and focused should be the same as in button.
- Visited color - #0d2311.

```css
/* Styles for link */
```

**Bonus goal**: link should be underlined only when it's active or hovered.
