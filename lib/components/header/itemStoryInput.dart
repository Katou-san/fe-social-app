import 'package:flutter/material.dart';

class ItemStoryInput extends StatefulWidget {
  const ItemStoryInput({super.key});

  @override
  _ItemStoryInputState createState() => _ItemStoryInputState();
}

class _ItemStoryInputState extends State<ItemStoryInput> {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: 35,
        height: 35,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(50), color: Colors.white),
        child: Container(
          height: 30,
          width: 30,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50),
              image: const DecorationImage(
                  image: NetworkImage(
                      'https://media.istockphoto.com/id/177512311/vi/anh/n%E1%BB%81n-kh%C3%B4ng-gian-sao-v%C5%A9-tr%E1%BB%A5-thi%C3%AAn-h%C3%A0-v%C3%A0-tinh-v%C3%A2n.webp?s=2048x2048&w=is&k=20&c=CDdW-fSLM7Bw_a4kGcpQzIec0j7zEqpTaaFcRAK4tjs='),
                  fit: BoxFit.cover)),
        ));
  }
}
