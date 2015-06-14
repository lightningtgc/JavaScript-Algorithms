//反转二叉树
/**
 * Question:
 *  Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

* to

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 * 
 * /
  
  
  
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root){
        // 遍历节点做交换位置
        root.left = [invertTree(root.right), root.right = invertTree(root.left)][0];
    }
    return root;
};
