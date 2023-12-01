import 'package:flutter/material.dart';
import 'package:scasys_1/commons/colors.dart';
import 'package:scasys_1/components/green_box.dart';

class TextInputBox extends StatefulWidget {
  const TextInputBox({super.key});

  @override
  State<TextInputBox> createState() => _TextInputBoxState();
}

class _TextInputBoxState extends State<TextInputBox> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const GreenBox(),
        Container(
          width: 303,
          height: 40,
          color: ColorPalette.textFieldBg,
          child: TextFormField(
            cursorColor: ColorPalette.darkGreen,
            cursorWidth: 3,
            style: const TextStyle(
              color: ColorPalette.textColor,
            ),
            decoration: const InputDecoration(
              contentPadding: EdgeInsets.only(left: 10, bottom: 10),
            ),
          ),
        )
      ],
    );
  }
}
