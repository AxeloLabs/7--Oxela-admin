import { delay } from '@/constants/mock-api';
import { PieGraph } from '@/features/dashboard/components/pie-graph';

export default async function Stats() {
  await delay(1000);
  return <PieGraph />;
}
