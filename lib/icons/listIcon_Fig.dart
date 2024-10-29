import 'package:flutter/material.dart';

class ListIconFig extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    Paint paint = Paint();
    Path path = Path();

    // Path number 1

    paint.color = Color.fromARGB(255, 240, 167, 167).withOpacity(0);
    path = Path();
    path.lineTo(size.width * 1.93, size.height * 3.01);
    path.cubicTo(size.width * 1.93, size.height * 3.01, size.width * 0.93,
        size.height * 3.01, size.width * 0.93, size.height * 3.01);
    path.cubicTo(size.width * 0.93, size.height * 3.01, size.width * 0.93,
        size.height * 2.01, size.width * 0.93, size.height * 2.01);
    path.cubicTo(size.width * 0.93, size.height * 2.01, size.width * 1.93,
        size.height * 2.01, size.width * 1.93, size.height * 2.01);
    path.cubicTo(size.width * 1.93, size.height * 2.01, size.width * 1.93,
        size.height * 3.01, size.width * 1.93, size.height * 3.01);
    canvas.drawPath(path, paint);

    // Path number 2

    paint.color = Color(0xffffffff).withOpacity(0);
    path = Path();
    path.lineTo(size.width * 1.93, size.height * 1.51);
    path.cubicTo(size.width * 1.93, size.height * 1.51, size.width * 1.93,
        size.height * 1.51, size.width * 1.93, size.height * 1.51);
    path.cubicTo(size.width * 1.93, size.height * 1.89, size.width * 2.02,
        size.height * 2.21, size.width * 2.13, size.height * 2.21);
    path.cubicTo(size.width * 2.13, size.height * 2.21, size.width * 2.65,
        size.height * 2.21, size.width * 2.65, size.height * 2.21);
    path.cubicTo(size.width * 2.76, size.height * 2.21, size.width * 2.85,
        size.height * 1.89, size.width * 2.85, size.height * 1.51);
    path.cubicTo(size.width * 2.85, size.height * 1.51, size.width * 2.85,
        size.height * 1.51, size.width * 2.85, size.height * 1.51);
    canvas.drawPath(path, paint);

    // Path number 3

    paint.color = Color(0xffffffff).withOpacity(0);
    path = Path();
    path.lineTo(size.width * 1.93, 6.52);
    path.cubicTo(size.width * 1.93, 6.52, size.width * 1.93, 6.52,
        size.width * 1.93, 6.52);
    path.cubicTo(size.width * 1.93, 6.14, size.width * 2.02, 5.82,
        size.width * 2.13, 5.82);
    path.cubicTo(size.width * 2.13, 5.82, size.width * 2.65, 5.82,
        size.width * 2.65, 5.82);
    path.cubicTo(size.width * 2.76, 5.82, size.width * 2.85, 6.14,
        size.width * 2.85, 6.52);
    path.cubicTo(size.width * 2.85, 6.52, size.width * 2.85, 6.52,
        size.width * 2.85, 6.52);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}
