import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';

class ItemTab extends StatefulWidget {
  const ItemTab({super.key});

  @override
  _ItemTabState createState() => _ItemTabState();
}

class _ItemTabState extends State<ItemTab> {
  @override
  Widget build(BuildContext context) {
    return Container(
      // decoration: const BoxDecoration(color: Colors.amber),
      padding: const EdgeInsets.fromLTRB(15, 0, 15, 0),
      child: Column(
        children: [
          Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                FittedBox(
                    fit: BoxFit.contain,
                    child: Container(
                      decoration: const BoxDecoration(
                          border: Border(bottom: BorderSide(width: 3))),
                      child: Text('123ssss',
                          style: TextStyle(
                              color: hexColor('6C808C'),
                              fontWeight: FontWeight.w600)),
                    )),
                Container(
                  margin: const EdgeInsets.only(left: 2),
                  padding: const EdgeInsets.fromLTRB(9, 5, 9, 5),
                  decoration: BoxDecoration(
                      borderRadius: const BorderRadius.all(Radius.circular(20)),
                      color: hexColor('368CCC')),
                  child: Text(
                    '189K',
                    style: const TextStyle(
                        fontSize: 13,
                        color: Colors.white,
                        fontWeight: FontWeight.w600),
                  ),
                )
              ]),
        ],
      ),
    );
  }
}
