module.exports = {
	details: {},
	progressions: [],
	workouts: [
		{
			day: 1,
			exercises: [
				{
					order: 1,
					superset: 1,
					movement: 'bench',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							reps: '5',
							repeat: 2,
							plusSet: false
						}
					]
				},
				{
					order: 1,
					superset: 2,
					movement: 'row',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							reps: '5',
							repeat: 2,
							plusSet: false
						}
					]
				}
			]
		},
		{
			day: 2,
			exercises: [
				{
					order: 1,
					movement: 'squat',
					sets: [
						{
							setNumber: '1',
							weight: '75',
							weightType: 'relative',
							reps: '5',
							plusSet: false
						}
					]
				}
			]
		}
	]
};
