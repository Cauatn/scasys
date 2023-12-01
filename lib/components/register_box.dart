import 'package:flutter/material.dart';
import 'package:scasys_1/commons/colors.dart';

class UserBox extends StatefulWidget {
  const UserBox({super.key});

  @override
  State<UserBox> createState() => _UserBoxState();
}

class _UserBoxState extends State<UserBox> {
  final double boxEdges = 10;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      cursorColor: ColorPalette.darkGreen,
      cursorWidth: 3,
      decoration: InputDecoration(
        contentPadding: EdgeInsets.only(left: boxEdges, bottom: boxEdges),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(boxEdges),
          borderSide: const BorderSide(
            width: 3,
            color: ColorPalette.lightGreen,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(boxEdges),
            borderSide: const BorderSide(
            width: 3,
            color: ColorPalette.darkGreen,
          ),
        ),
      ),
      style: const TextStyle(
        color: ColorPalette.textColor,
      ),
    );
  }
}
