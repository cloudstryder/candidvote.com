/*
pwt: public works/transport
ee: environment/energy
si: social issues
pb: policing/budget
h: housing
*/

questions =  [
    {"id": 0, "question": "My city should ban PACS, Unions, developers from campaign contribution entirely estate and fossil fuels companies are overrepresented groups in my city campaigns.", "effects": {"pwt": -1}},
    {"id": 1, "question": "My city should prioritize the development of reliable public transportation (buses, metro, etc.)", "effects": {"pwt": -1}},
    {"id": 2, "question": "My city should set forward a climate proposal to achieve net-zero emissions", "effects": {"ee": -1}},
    {"id": 3, "question": "My city should use fossil fuels as a primary source for its energy grid", "effects": {"ee": 1}},
    {"id": 4, "question": "My city’s public sector jobs should be unionized", "effects": {"si": -1}},
    {"id": 5, "question": "The criminal justice system disproportionately affects minority communities", "effects": {"si": -1}},
    {"id": 6, "question": "My city should increase funding for its police department", "effects": {"si": 1}},
    {"id": 7, "question": "My city should direct more funding towards the police department", "effects": {"pb": 1}},
    {"id": 8, "question": "Unarmed officers in my city should respond to non-violent police calls", "effects": {"pb": -1}},
    {"id": 9, "question": "My city's chools should not teach critical race theory", "effects": {"si": 1}},
    {"id": 10, "question": "My city should prioritize public housing as a means to reduce the homeless population", "effects": {"h": -1}},
    {"id": 11, "question": "Gentrification is an ongoing problem in my city that should be addressed", "effects": {"h": -1}}
];