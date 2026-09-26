import { useMemo, useState } from 'react';
import { Flame, Clock3, Dumbbell } from 'lucide-react';
import { useFitLog } from '../context/FitLogContext';
import PlanCard from '../components/PlanCard';
import EmptyState from '../components/EmptyState';

export default function MyPlan() {
  const { plan, saved } = useFitLog();
  const [tab, setTab] = useState('plan');
  const current = tab === 'plan' ? plan : saved;
  const metrics = useMemo(() => ({ exercises: plan.length, minutes: plan.reduce((sum, x) => sum + x.duration, 0), calories: plan.reduce((sum, x) => sum + x.caloriesBurned, 0) }), [plan]);

  return (
    <main className="page section container">
      <div className="page-heading"><span className="eyebrow">YOUR LOG</span><h1>MY PLAN</h1><p>Cap of five lifts for today. Finish them, then load more.</p></div>
      <div className="metrics">
        <Metric icon={<Dumbbell />} label="Exercises" value={metrics.exercises} />
        <Metric icon={<Clock3 />} label="Minutes" value={metrics.minutes} />
        <Metric icon={<Flame />} label="Calories" value={metrics.calories} />
      </div>
      <div className="tabs">
        <button className={tab === 'plan' ? 'active' : ''} onClick={() => setTab('plan')}>Today's Plan <b>{plan.length}</b></button>
        <button className={tab === 'saved' ? 'active' : ''} onClick={() => setTab('saved')}>Saved <b>{saved.length}</b></button>
      </div>
      <div className="plan-list">
        {current.length ? current.map((workout) => <PlanCard key={workout.id} workout={workout} saved={tab === 'saved'} />) : <EmptyState saved={tab === 'saved'} />}
      </div>
    </main>
  );
}

function Metric({ icon, label, value }) {
  return <div className="metric"><span>{icon}</span><small>{label}</small><strong>{value}</strong></div>;
}
