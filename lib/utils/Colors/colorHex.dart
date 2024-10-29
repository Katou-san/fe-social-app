import 'dart:ui';

Color hexColor(String hex) {
  String char = '0xFF$hex';
  return Color(int.parse(char));
}
