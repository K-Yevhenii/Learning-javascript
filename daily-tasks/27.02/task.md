# Heros and potions


**Goal** - implement functionality that allows to get and consume potions by heroes.

Hero:
- should have these fields:
  - hp
  - maximum hp
  - mana
  - current mana
  - inventory
- up to 6 potions in inventory
- can add potion to inventory
- can consume potion
- can consume all potions of the same type simultaneously


Potion:
- should have these fields:
  - has owner

Create 2 types of potions:
- Health potion
  - restores 250 hp of owner
  - cannot be consumed if hp is full
  - cannot restore more than maximum hp
- Mana potion
  - cannot be consumed if mana is full
  - cannot restore more than maximum mana



