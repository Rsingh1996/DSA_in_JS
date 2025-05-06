/* Hash Table
A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
Given a key, you can associate a value with that key for very fast lookup.
JS Objects is a special implementaion of the hash table data structure.
However, Object class adds it's own keys. Keys that us input may conflict and overwrite defauls properties.
Maps which were interduced in 2015 allow us to store key-value pairs.
1. 'in' => 'India'
2. 'au' => 'Australia'
3. 'fr' => 'France'

we store the key value pair in a fixed sized array.
Arrays have a numeric index.
How do we go form using a string as an index to number as an index?
a hashing funnction accepts the string key, converts it into a hash code using a defined logic and then maps it into a numerix index that is within the bounds of the array.
Using the index, store the value.
The same hashing function is reused to retrieve the value given a key
- Set s store a key-value pair
- Get to retrieve a value given its key
- Remove to delete a key value pair
- Hasing function to convert a string key to a numeric index

Applications
- Hash tables are typically implemented where constant time lookup and insertion are required.
- Database indexing
- Caches
*/

// Hash collision - when hashing function generate same index for different keys resulting in loss of data.

/* Hash Table
A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
Given a key, you can associate a value with that key for very fast lookup.
JS Objects is a special implementaion of the hash table data structure.
However, Object class adds it's own keys. Keys that us input may conflict and overwrite defauls properties.
Maps which were interduced in 2015 allow us to store key-value pairs.
1. 'in' => 'India'
2. 'au' => 'Australia'
3. 'fr' => 'France'

we store the key value pair in a fixed sized array.
Arrays have a numeric index.
How do we go form using a string as an index to number as an index?
a hashing funnction accepts the string key, converts it into a hash code using a defined logic and then maps it into a numerix index that is within the bounds of the array.
Using the index, store the value.
The same hashing function is reused to retrieve the value given a key
- Set s store a key-value pair
- Get to retrieve a value given its key
- Remove to delete a key value pair
- Hasing function to convert a string key to a numeric index

Applications
- Hash tables are typically implemented where constant time lookup and insertion are required.
- Database indexing
- Caches
*/

// Hash collision - when hashing function generate same index for different keys resulting in loss of data.

class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  // Hash collision - above function has bug
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;   /
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // if (index) {
    //   this.table[index] = undefined;
    // }
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashTable(50);
table.set("name", "Rahul");
table.set("age", "28");
table.display();
table.set("mane", "Singh");
table.set("name", "Reva");
table.display();
table.remove("name");
table.display();
