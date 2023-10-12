import { Component } from '@angular/core';

@Component({
  selector: 'app-risc-v-processor',
  templateUrl: './risc-v-processor.component.html',
  styleUrls: ['./risc-v-processor.component.css']
})
export class RISCVProcessorComponent {
  name = "RISC-V Processor";
  github = '';
  description = [
    "Throughout the course of 7 lab sessions, I learned to build a functioning RISC-V Processor in SystemVerilog.",
    "The first lab began with creating a 16-bit adder, which would add any two signed, 2’s complement hexadecimal " +
    "numbers and flag whether overflow occurred during the addition.",
    "The second lab focused on designing an Arithmetic and Logic Unit to compute addition, inversion, and logic, or logic, " +
    "arithmetic right shift, logical left shift, branch if equal, branch if not equal, and exclusive or. The 16-bit " +
    "adder from lab 1 was used for addition on this ALU.",
    "The third lab once again built on the ones before, introducing a register system that served as a source of m" +
    "emory for the processor. The register system was connected with two multiplexers to the 16-bit adder for " +
    "results to be computed with and stored in registers.",
    "The fourth lab consisted of adding Data Memory to the Datapath of the processor. Because the register system only" +
    "had a very limited amount of memory, data memory was essential to allowing values to be stored for longer term use.",
    "The fifth lab introduced an instruction decoder to the processor, which allowed a user to simply input the opcode," +
    " register numbers, and immediate/offset values of an instruction, rather than the various values needed to compute" +
    " any value in the previous lab. This decoder is different from a typical RISC-V processor, as you do not need to" +
    " encode register numbers or provide values such as funct3 and funct7.",
    "The sixth lab's purpose was to add instruction memory, a mapper, and a program counter to the processor. The " +
    "program counter was used to address the instruction memory, and as the program counter, i, increased, the mapper" +
    "would execute the ith instruction in the instruction memory. These components allow a user to store " +
    "instructions and execute them in order as the program counter increases, removing the need for writing out " +
    "opcodes, register numbers, and immediate/offset values.",
    "Finally, in the seventh lab, branching functionality was introduced to the processor. This allowed for branching and jumping" +
    " instructions to be completed, and was the final piece of the processor that allowed us to execute RISC-V " +
    "assembly instructions."
  ];
  images = [];
  skills = [
    {name: "SystemVerilog", icon: "bi bi-pc-display-horizontal"},
  ];
}
