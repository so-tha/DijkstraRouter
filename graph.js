class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.queue.shift().element;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
  

    for (let node in graph) {
      if (node === start) {
        distances[node] = 0;
        priorityQueue.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
        priorityQueue.enqueue(node, Infinity);
      }
      previous[node] = null;
    }
  
    while (!priorityQueue.isEmpty()) {
      const currentNode = priorityQueue.dequeue();
  

      for (let neighbor in graph[currentNode]) {
        const distance = distances[currentNode] + graph[currentNode][neighbor];
  
  
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentNode;
          priorityQueue.enqueue(neighbor, distance);
        }
      }
    }
  
    return distances;
  }
  

  const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
  };
  

  const shortestPaths = dijkstra(graph, 'A');
  console.log(shortestPaths);
  