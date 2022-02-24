/*
-10 = progressive, 10 = conservative
pwt: public works/transport
ee: environment/energy
si: social issues
pb: policing/budget
h: housing
*/

questions =  [
    {"id": 0, "question": "Special Interests are overrepresented in my city’s politics.", "effects": {"pwt": -1}},
    {"id": 1, "question": "My city should prioritize the development of public transportation (trains, buses, etc.).", "effects": {"pwt": -1}},
    {"id": 2, "question": "My city should set forward a climate proposal to achieve net-zero emissions.", "effects": {"ee": -1}},
    {"id": 3, "question": "Fossil fuels are a necessary part of my city’s energy grid.", "effects": {"ee": 1}},
    {"id": 4, "question": "My city’s public sector jobs should be unionized.", "effects": {"si": -1}},
    {"id": 5, "question": "The criminal justice system unequally affects minority communities.", "effects": {"si": -1}},
    {"id": 6, "question": "My city should reallocate police funds to social services.", "effects": {"si": -1}},
    {"id": 7, "question": "Social workers and mental health professionals should respond to nonviolent police calls.", "effects": {"pb": -1}},
    {"id": 8, "question": "Unarmed officers in my city should respond to non-violent police calls", "effects": {"pb": -1}},
    {"id": 9, "question": "My city should prioritize and invest in building affordable housing.", "effects": {"si": -1}},
    {"id": 10, "question": "Rent control is a necessary means to address the housing crisis.", "effects": {"h": -1}}
];