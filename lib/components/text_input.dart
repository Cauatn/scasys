import 'package:flutter/material.dart';
import 'package:scasys_1/commons/colors.dart';
import 'package:scasys_1/components/green_box.dart';

class TextInput extends StatefulWidget {
  const TextInput({super.key});

  @override
  State<TextInput> createState() => _TextInputState();
}

class _TextInputState extends State<TextInput> {
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
