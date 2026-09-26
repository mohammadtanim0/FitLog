import { useMemo, useState } from 'react';
import { Flame, Clock3, Dumbbell } from 'lucide-react';
import { useFitLog } from '../context/FitLogContext';
import PlanCard from '../components/PlanCard';
import EmptyState from '../components/EmptyState';
import SortDropdown from '../components/SortDropdown';

export default function MyPlan() {
  const { plan, saved } = useFitLog();

  const [tab, setTab] = useState('plan');
  const [sortBy, setSortBy] = useState('duration');

  // Current list based on selected tab
  const current = tab === 'plan' ? plan : saved;

  // Sort workouts
  const sortedCurrent = useMemo(() => {
    const workouts = [...current];

    if (sortBy === 'duration') {
      return workouts.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === 'calories') {
      return workouts.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      );
    }

    if (sortBy === 'rating') {
      return workouts.sort((a, b) => b.rating - a.rating);
    }

    return workouts;
  }, [current, sortBy]);

  // Plan metrics
  const metrics = useMemo(() => {
    return {
      exercises: plan.length,

      minutes: plan.reduce(
        (sum, workout) => sum + workout.duration,
        0
      ),

      calories: plan.reduce(
        (sum, workout) => sum + workout.caloriesBurned,
        0
      ),
    };
  }, [plan]);

  return (
    <main className="page section container">

      {/* Page Header */}
      <div className="plan-header">
        <div>
          <h1>MY PLAN</h1>

          <p>
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics">
        <Metric
          icon={<Dumbbell />}
          label="Exercises"
          value={metrics.exercises}
        />

        <Metric
          icon={<Clock3 />}
          label="Minutes"
          value={metrics.minutes}
        />

        <Metric
          icon={<Flame />}
          label="Calories"
          value={metrics.calories}
        />
      </div>

      {/* Tabs + Sort */}
      <div className="plan-controls">

        {/* Tabs */}
        <div className="tabs">
          <button
            className={tab === 'plan' ? 'active' : ''}
            onClick={() => setTab('plan')}
          >
            Today's Plan <b>{plan.length}</b>
          </button>

          <button
            className={tab === 'saved' ? 'active' : ''}
            onClick={() => setTab('saved')}
          >
            Saved <b>{saved.length}</b>
          </button>
        </div>

        {/* Custom Sort Dropdown */}
        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />

      </div>

      {/* Workout List */}
      <div className="plan-list">
        {sortedCurrent.length > 0 ? (
          sortedCurrent.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              saved={tab === 'saved'}
            />
          ))
        ) : (
          <EmptyState saved={tab === 'saved'} />
        )}
      </div>

    </main>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="metric">
      <span>{icon}</span>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}