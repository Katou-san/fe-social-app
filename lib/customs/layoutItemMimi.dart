import 'package:fe_social_app/components/header/itemStoryInput.dart';
import 'package:flutter/material.dart';

class LayoutItemMimi extends StatefulWidget {
  const LayoutItemMimi({Key? key}) : super(key: key);

  @override
  _LayoutItemMimiState createState() => _LayoutItemMimiState();
}

class _LayoutItemMimiState extends State<LayoutItemMimi> {
  @override
  Widget build(BuildContext context) {
    List<int> list = [1, 2, 3];
    return Row(
      // alignment: Alignment.centerRight,
      children: [
        for (int i = 0; i < 3; i++)
          Positioned(
            left: 30,
            // margin: EdgeInsets.only(left: 10),
            child: const ItemStoryInput(),
          )
      ],
    );
  }
}
