import 'package:flutter/material.dart';
import 'package:scasys_1/components/green_box.dart';

/// Flutter code sample for [PopupMenuButton].

// This is the type used by the popup menu below.
enum SampleItem {
  _reducionista,
  _guiado,
  _expandido,
  _exaustivo,
  _inicial,
  _final,
  _repeticoes
}

class PopupMenuExample extends StatefulWidget {
  final double? containerWidth;
  final String condicao;

  const PopupMenuExample({
    required this.condicao,
    required this.containerWidth,
    super.key,
  });

  @override
  State<PopupMenuExample> createState() => _PopupMenuExampleState();
}

class _PopupMenuExampleState extends State<PopupMenuExample> {
  TextEditingController inputController = TextEditingController();
  SampleItem? selectedMenu;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const GreenBox(),
        Container(
          width: widget.containerWidth,
          height: 40,
          color: const Color.fromRGBO(240, 240, 240, 100),
          child: TextFormField(
            controller: inputController,
            onChanged: (value) {
              //para o flutter ficar ciente de quando um texto for digitado
              setState(() {});
            },
            decoration: const InputDecoration(
                hintText: 'exemplooo',
                contentPadding: EdgeInsets.only(left: 10, bottom: 10)),
          ),
        ),
        Container(
          color: const Color.fromRGBO(217, 217, 217, 100),
          child: PopupMenuButton(
              onSelected: (SampleItem item) {
                setState(() {
                  selectedMenu = item;
                });
              },
              icon: const RotatedBox(
                quarterTurns: 1,
                child: Icon(
                  size: 25,
                  Icons.play_arrow_sharp,
                ),
              ),
              itemBuilder: (BuildContext context) =>
                  <PopupMenuEntry<SampleItem>>[
                    if (widget.condicao == 'calculus') ...[
                      const PopupMenuItem(
                        value: SampleItem._reducionista,
                        child: Text('reducionista'),
                      ),
                      const PopupMenuItem(
                        value: SampleItem._guiado,
                        child: Text('guiado'),
                      ),
                      const PopupMenuItem(
                        value: SampleItem._expandido,
                        child: Text('expandido'),
                      ),
                      const PopupMenuItem(
                        value: SampleItem._exaustivo,
                        child: Text('exaustivo'),
                      ),
                    ] else if (widget.condicao == 'fase') ...[
                      const PopupMenuItem(
                        value: SampleItem._inicial,
                        child: Text('inicial'),
                      ),
                      const PopupMenuItem(
                        value: SampleItem._final,
                        child: Text('final'),
                      ),
                    ],
                  ]),
        ),
      ],
    );
  }
}
