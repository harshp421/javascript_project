class Node:
    def __init__(self,val=0):
        self.val = val
        self.next = None

class llist:
    def __init__(self):
        self.head = None

linked = llist()
linked.head = Node(5)
second = Node(10)   
third = Node(15)
linked.head.next = second
second.next = third

#deleting the node
linked.head.next = third

while linked.head != None :
    print(linked.head.val,end='->')
    linked.head = linked.head.next

print(linked.head)