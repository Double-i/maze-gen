class Point {
    static points = []
    constructor(x, y) {
        this.visited = false
        this.x = x
        this.y = y

        Point.points.push(this)
    }
    static createPoint(x, y) {
        for (let point of Point.points) {
            if (point.equals(x, y)) return point
        }
        return new Point(x, y)
    }
    equals(point) {
        return point.x == this.x && point.y == this.y
    }
    equals(x, y) {
        return x == this.x && y == this.y
    }
    getRandomNeigh() {
        let x = -1
        let y = -1
        let neigh
        do {
            while (x < 0 && y < 0) {
                // we choose randomly which axe used and which way
                if (Math.random < 0.5) {
                    x = this.x + Math.random() < 0.5 ? -1 : 1
                    y = this.y
                } else {
                    y = this.y + Math.random() < 0.5 ? -1 : 1
                    x = this.x
                }
            }
            neigh = Point.createPoint(x, y)
        } while (neigh.visited)
        return neigh
    }
}

width = 10
height = 10

// maze init
const maze = []
let unvisitedCells = 0
for (let r = 0; r < height; r++) {
    const row = []
    for (let c = 0; c < width; c++) {
        row.push('#')
        unvisitedCells++
    }
    maze.push(row)
}
const startPoint = new Point(
    Math.floor(Math.random() * width),
    Math.floor(Math.random() * height)
)
let currentPoint = startPoint

maze[startPoint.x][startPoint.y] = 'S'

while (unvisitedCells > 0) {
    currentPoint.getRandomNeigh
}

console.log(maze)
