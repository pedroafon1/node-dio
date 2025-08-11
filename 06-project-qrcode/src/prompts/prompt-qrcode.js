import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link que deseja gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha ente o tipo de QRcode (1 - NORMAL ou (2 - TERMINAL "
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQRCode;
