module.exports = {
	details: {
		name: 'ULULU Split',
		duration: '28',
		schedule: '0111110',
		daysPerWeek: 5,
		movements: [
			'Row',
			'Bench',
			'Strict Press',
			'Pull Up',
			'Dip',
			'Curl',
			'Squat',
			'Sumo Deadlift',
			'Incline Press',
			'Deadlift',
			'Front Squat',
			'Chin Up',
			'Ring Dip',
			'Lateral Raise'
		]
	},
	progressions: [
		{
			movement: 'bench',
			frequency: 'week',
			amount: '5',
			condition: 'reps',
			conditionAmount: '8'
		}
	],
	workouts: [
		{
			day: '1',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							repeat: '5',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '70',
							weightType: 'relative',
							repeat: '3',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'dip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '15',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '2',
			exercises: [
				{
					order: '1',
					movement: 'squat',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '5',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'sumoDeadlift',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '3',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '50',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '60',
							weightType: 'relative',
							repeat: '1',
							reps: '6',
							plusSet: false
						},
						{
							setNumber: '3',
							weight: '70',
							weightType: 'relative',
							repeat: '2',
							reps: '4',
							plusSet: false
						},
						{
							setNumber: '4',
							weight: '80',
							weightType: 'relative',
							repeat: '2',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'inclinePress',
					sets: [
						{
							setNumber: '1',
							weight: '45',
							weightType: 'absolute',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'dip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '15',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '4',
			exercises: [
				{
					order: '1',
					movement: 'deadlift',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							repeat: '8',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'frontSquat',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '75',
							weightType: 'relative',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '5',
			exercises: [
				{
					order: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: true
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '70',
							weightType: 'relative',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'chinUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'lateralRaise',
					sets: [
						{
							setNumber: '1',
							weight: '20',
							weightType: 'absolute',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '6',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '4',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '70',
							weightType: 'relative',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '11',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '85',
							weightType: 'relative',
							repeat: '3',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '5',
							plusSet: true
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '7',
			exercises: [
				{
					order: '1',
					movement: 'squat',
					sets: [
						{
							setNumber: '1',
							weight: '85',
							weightType: 'relative',
							repeat: '4',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'sumoDeadlift',
					sets: [
						{
							setNumber: '2',
							weight: '80',
							weightType: 'relative',
							repeat: '4',
							reps: '6',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '8',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '50',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '60',
							weightType: 'relative',
							repeat: '2',
							reps: '6',
							plusSet: false
						},
						{
							setNumber: '3',
							weight: '70',
							weightType: 'relative',
							repeat: '2',
							reps: '5',
							plusSet: false
						},
						{
							setNumber: '4',
							weight: '75',
							weightType: 'relative',
							repeat: '2',
							reps: '4',
							plusSet: false
						},
						{
							setNumber: '5',
							weight: '80',
							weightType: 'relative',
							repeat: '3',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '11',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'inclinePress',
					sets: [
						{
							setNumber: '1',
							weight: '45',
							weightType: 'absolute',
							repeat: '3',
							reps: '9',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '5',
							plusSet: true
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'dip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '15',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '9',
			exercises: [
				{
					order: '1',
					movement: 'deadlift',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '6',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'frontSquat',
					sets: [
						{
							setNumber: '1',
							weight: '85',
							weightType: 'relative',
							repeat: '1',
							reps: '5',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '85',
							weightType: 'relative',
							repeat: '3',
							reps: '4',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '10',
			exercises: [
				{
					order: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: true
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'chinUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '8',
							plusSet: true
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'lateralRaise',
					sets: [
						{
							setNumber: '1',
							weight: '20',
							weightType: 'absolute',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '11',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '85',
							weightType: 'relative',
							repeat: '4',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '75',
							weightType: 'relative',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '12',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '90',
							weightType: 'relative',
							repeat: '3',
							reps: '1',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '12',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '12',
			exercises: [
				{
					order: '1',
					movement: 'squat',
					sets: [
						{
							setNumber: '1',
							weight: '90',
							weightType: 'relative',
							repeat: '3',
							reps: '1',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'sumoDeadlift',
					sets: [
						{
							setNumber: '2',
							weight: '80',
							weightType: 'relative',
							repeat: '5',
							reps: '6',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '13',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '50',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '60',
							weightType: 'relative',
							repeat: '2',
							reps: '6',
							plusSet: false
						},
						{
							setNumber: '3',
							weight: '70',
							weightType: 'relative',
							repeat: '2',
							reps: '5',
							plusSet: false
						},
						{
							setNumber: '4',
							weight: '80',
							weightType: 'relative',
							repeat: '2',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '5',
							weight: '90',
							weightType: 'relative',
							repeat: '2',
							reps: '1',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '12',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'inclinePress',
					sets: [
						{
							setNumber: '1',
							weight: '45',
							weightType: 'absolute',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'dip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '18',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '25',
							weightType: 'absolute',
							repeat: '3',
							reps: '12',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '14',
			exercises: [
				{
					order: '1',
					movement: 'deadlift',
					sets: [
						{
							setNumber: '1',
							weight: '85',
							weightType: 'relative',
							repeat: '4',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'frontSquat',
					sets: [
						{
							setNumber: '1',
							weight: '90',
							weightType: 'relative',
							repeat: '1',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '85',
							weightType: 'relative',
							repeat: '3',
							reps: '2',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '15',
			exercises: [
				{
					order: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '1',
							reps: '8',
							plusSet: true
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '3',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'chinUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '8',
							plusSet: true
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'lateralRaise',
					sets: [
						{
							setNumber: '1',
							weight: '20',
							weightType: 'absolute',
							repeat: '3',
							reps: '12',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '16',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '80',
							weightType: 'relative',
							repeat: '3',
							reps: '2',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '75',
							weightType: 'relative',
							repeat: '3',
							reps: '5',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '10',
							weightType: 'absolute',
							repeat: '5',
							reps: '12',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '60',
							weightType: 'relative',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '12',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '30',
							weightType: 'absolute',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '17',
			exercises: [
				{
					order: '1',
					movement: 'squat',
					sets: [
						{
							setNumber: '1',
							weight: '100',
							weightType: 'max',
							repeat: '1',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'deadlift',
					sets: [
						{
							setNumber: '2',
							weight: '65',
							weightType: 'relative',
							repeat: '4',
							reps: '3',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '18',
			exercises: [
				{
					order: '1',
					superset: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '50',
							weightType: 'relative',
							repeat: '1',
							reps: '5',
							plusSet: false
						},
						{
							setNumber: '2',
							weight: '60',
							weightType: 'relative',
							repeat: '1',
							reps: '4',
							plusSet: false
						},
						{
							setNumber: '3',
							weight: '70',
							weightType: 'relative',
							repeat: '1',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '4',
							weight: '75',
							weightType: 'relative',
							repeat: '2',
							reps: '3',
							plusSet: false
						},
						{
							setNumber: '5',
							weight: '80',
							weightType: 'relative',
							repeat: '2',
							reps: '2',
							plusSet: false
						}
					]
				},
				{
					order: '1',
					superset: '2',
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '11',
							weightType: 'absolute',
							repeat: '5',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'inclinePress',
					sets: [
						{
							setNumber: '1',
							weight: '45',
							weightType: 'absolute',
							repeat: '3',
							reps: '10',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					superset: '2',
					movement: 'pullUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '6',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'dip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '18',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '30',
							weightType: 'absolute',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '19',
			exercises: [
				{
					order: '1',
					movement: 'deadlift',
					sets: [
						{
							setNumber: '1',
							weight: '100',
							weightType: 'max',
							repeat: '1',
							reps: '3',
							plusSet: false
						}
					]
				},
				{
					order: '2',
					movement: 'frontSquat',
					sets: [
						{
							setNumber: '1',
							weight: '100',
							weightType: 'max',
							repeat: '1',
							reps: '3',
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: '20',
			exercises: [
				{
					order: '1',
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '100',
							weightType: 'max',
							repeat: '1',
							reps: '3',
							plusSet: true
						}
					]
				},
				{
					order: '2',
					superset: '1',
					movement: 'strictPress',
					sets: [
						{
							setNumber: '1',
							weight: '100',
							weightType: 'max',
							repeat: '1',
							reps: '3',
							plusSet: true
						}
					]
				},
				{
					order: '3',
					superset: '1',
					movement: 'chinUp',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				},
				{
					order: '3',
					superset: '2',
					movement: 'ringDip',
					sets: [
						{
							setNumber: '1',
							repeat: '3',
							reps: '11',
							plusSet: false
						}
					]
				},
				{
					order: '4',
					superset: '1',
					movement: 'lateralRaise',
					sets: [
						{
							setNumber: '1',
							weight: '20',
							weightType: 'absolute',
							repeat: '3',
							reps: '12',
							plusSet: false
						}
					]
				},
				{
					order: '4',
					superset: '2',
					movement: 'curl',
					sets: [
						{
							setNumber: '1',
							weight: '30',
							weightType: 'absolute',
							repeat: '3',
							reps: '8',
							plusSet: false
						}
					]
				}
			]
		}
	]
}
