import unittest

class TestStack(unittest.TestCase):

    def test_push(self):
        # Assuming there is a Stack class implemented in stack.py
        from stack import Stack  # Replace stack with the actual module name if different
        stack = Stack()
        stack.push(1)
        self.assertEqual(len(stack._items), 1)
        self.assertEqual(stack._items[0], 1)

    def test_pop(self):
        # Assuming there is a Stack class implemented in stack.py
        from stack import Stack  # Replace stack with the actual module name if different
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(len(stack._items), 1)
        self.assertEqual(stack._items[0], 1)

    def test_is_empty(self):
        # Assuming there is a Stack class implemented in stack.py
        from stack import Stack  # Replace stack with the actual module name if different
        stack = Stack()
        self.assertTrue(stack.is_empty())
        stack.push(1)
        self.assertFalse(stack.is_empty())

if __name__ == '__main__':
    unittest.main()
