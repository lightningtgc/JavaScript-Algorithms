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


// 不递归版本
var invertTree = function(root) {
    if (root !== null) {
        var nodes = [root];
        while(nodes.length) {
            //将数组中第一个值抛出来，node做对象引用
            var node = nodes.shift();
            if(node === null) continue;
            
            //放进数组中继续遍历子节点，全部做左右交换
            nodes.push(node.left);
            nodes.push(node.right);
            
            //交换左右树
            node.right = [node.left, node.left = node.right][0];
    
        }
    }
    
    return root;
};
