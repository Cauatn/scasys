import 'package:flutter/material.dart';
import 'package:scasys_1/commons/colors.dart';

class AddButton extends StatefulWidget {
  const AddButton({super.key});

  @override
  State<AddButton> createState() => _AddButtonState();
}

class _AddButtonState extends State<AddButton> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        backgroundColor: ColorPalette.greyButton,
        padding: const EdgeInsets.only(left: 0, right: 0, top: 12, bottom: 12),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(60),
        ),
      ),
      child: const Icon(
        Icons.add_circle_outline,
        color: ColorPalette.textColor,
        size: 35,
      ),
    );
  }
}
