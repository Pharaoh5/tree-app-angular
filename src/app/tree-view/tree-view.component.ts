import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeNode } from '../model/tree-node.model';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  imports: [NgFor, NgIf, NgClass]
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
  @Input() expanded!: Set<number>;
  @Input() isExpanded!: (node: TreeNode) => boolean;

  @Output() toggle = new EventEmitter<TreeNode>();

  onToggle(node: TreeNode) {
  this.toggle.emit(node);
}
}
