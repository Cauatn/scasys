import 'package:flutter/material.dart';
import 'package:scasys_1/components/input_pop_up_menu.dart';
import 'package:scasys_1/components/rounded_question_button.dart';
import 'package:scasys_1/components/text_input.dart';

class Procedimento extends StatelessWidget {
  const Procedimento({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            width: 800,
            height: 800,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                ClipRect(
                  child: Image.asset('assets/images/logo.png'),
                ),
                const SizedBox(
                  width: 500,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                          'Forneça um nome para o procedimento a ser avaliado :'),
                      TextInput(),
                    ],
                  ),
                ),
                const SizedBox(
                  width: 500,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Escolha um modo de cálculo :'),
                          PopupMenuExample(
                            containerWidth: 300,
                            condicao: 'fase',
                          ),
                        ],
                      ),
                      Padding(
                        padding: EdgeInsets.fromLTRB(0, 20, 0, 0),
                        child: QuestionButton(),
                      ),
                    ],
                  ),
                ),
                const SizedBox(
                  width: 500,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Fase :'),
                      PopupMenuExample(
                        containerWidth: 200,
                        condicao: 'fase',
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(
            width: 500,
            child: Text('aaa'),
          )
        ],
      ),
    );
  }
}
