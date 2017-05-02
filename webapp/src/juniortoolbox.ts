export default new DOMParser().parseFromString(`<xml id="blocklyToolboxDefinition" style="display: none">
            <block type="controls_repeat_ext" colour="#1DDF1D" gap="8">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">4</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_if" gap="8" colour="#00BDCA">
                <value name="IF0">
                    <shadow type="logic_boolean">
                        <field name="BOOL">TRUE</field>
                    </shadow>
                </value>
            </block>
            <block type="logic_compare" gap="8" colour="#00BDCA">
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="logic_operation" gap="8" colour="#00BDCA"></block>
            <block type="logic_negate" colour="#00BDCA"></block>
            <block type="math_arithmetic" gap="8" colour="#CB44CD">
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="device_random" gap="8" colour="#CB44CD">
                <value name="limit">
                    <shadow type="math_number">
                        <field name="NUM">4</field>
                    </shadow>
                </value>
            </block>
    </xml>`, "text/xml");