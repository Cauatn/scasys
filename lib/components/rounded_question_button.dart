import 'package:flutter/material.dart';
import 'package:scasys_1/commons/colors.dart';

class QuestionButton extends StatefulWidget {
  const QuestionButton({super.key});

  @override
  State<QuestionButton> createState() => _QuestionButtonState();
}

class _QuestionButtonState extends State<QuestionButton> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        backgroundColor: ColorPalette.grey,
        padding: const EdgeInsets.only(left: 0, right: 0, top: 12, bottom: 12),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(60),
        ),
      ),
      child: const Icon(
        Icons.question_mark_outlined,
        color: ColorPalette.textColor,
        size: 35,
      ),
    );
  }
}
