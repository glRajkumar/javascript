function hashFn(str = "", tableSize) {
	let hash = 13
	let len = str.length

	for (let i = 0; i < len; i++) {
		hash = (hash * str.charCodeAt(i)) % tableSize
	}

	return hash
}

// class HashTable {
// 	#count = 0
// 	constructor(size) {
// 		this.size = size || 7
// 		this.table = new Array(this.size)
// 	}

// 	#resize() {
// 		const newTable = new Array(this.size * 2)
// 		const newSize = newTable.length

// 		this.table.forEach(item => {
// 			if (item) {
// 				item.forEach(([key, data]) => {
// 					const id = hashFn(key, newSize)

// 					if (newTable[id]) {
// 						newTable[id].push([key, data])
// 					} else {
// 						newTable[id] = [[key, data]]
// 					}
// 				})
// 			}
// 		})

// 		this.table = newTable
// 		this.size = this.size * 2
// 	}

// 	add(key, data) {
// 		const loadFactor = this.#count / this.size
// 		if (loadFactor > .8) {
// 			this.#resize()
// 		}

// 		const id = hashFn(key, this.size)

// 		if (this.table[id]) {
// 			this.table[id].push([key, data])
// 		} else {
// 			this.table[id] = [[key, data]]
// 		}

// 		this.#count++
// 	}

// 	remove(key) {
// 		const id = hashFn(key, this.size)
// 		this.table[id] = this.table[id].filter(([k]) => k !== key)
// 		this.#count--
// 	}

// 	find(key) {
// 		const id = hashFn(key, this.size)
// 		if (!this.table[id]) return null

// 		return this.table[id].find(e => e[0] === key)?.[1]
// 	}

// 	isEmpty() {
// 		return this.#count === 0
// 	}

// 	getData() {
// 		return this.table
// 	}

// 	getLength() {
// 		return this.#count
// 	}
// }


class HashTable {
	#count = 0
	constructor(size) {
		this.size = size || 7
		this.table = new Array(this.size)

		for (let i = 0; i < this.size; i++) {
			this.table[i] = new Map()
		}
	}

	#resize() {
		const newTable = new Array(this.size * 2)
		const newSize = newTable.length

		for (let i = 0; i < newSize; i++) {
			newTable[i] = new Map()
		}

		this.table.forEach(item => {
			if (item.size > 0) {
				item.forEach((val, key) => {
					const id = hashFn(key, newSize)
					newTable[id].set(key, val)
				})
			}
		})

		this.table = newTable
		this.size = this.size * 2
	}

	add(key, data) {
		const loadFactor = this.#count / this.size
		if (loadFactor > .8) {
			this.#resize()
		}

		const id = hashFn(key, this.size)
		this.table[id].set(key, data)
		this.#count++
	}

	remove(key) {
		const id = hashFn(key, this.size)
		this.table[id].delete(key)
		this.#count--
	}

	find(key) {
		const id = hashFn(key, this.size)

		return this.table[id].get(key)
	}

	isEmpty() {
		return this.#count === 0
	}

	getData() {
		return this.table
	}

	getLength() {
		return this.#count
	}
}

module.exports = HashTable