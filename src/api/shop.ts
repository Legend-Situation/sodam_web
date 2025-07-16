import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from './axios';
import QUERY_KEY from '@/constants/queryKey';

export const useShopItemsQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.shop.ITEMS],
    queryFn: () => axios.get('/shop/items').then((res: any) => res.data),
  });

export const useInventoryQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.shop.INVENTORY],
    queryFn: () => axios.get('/shop/inventory').then((res: any) => res.data),
  });

type PurchaseItemParams = { itemId: number; quantity: number };
export const usePurchaseItemMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PurchaseItemParams) =>
      axios.post('/shop/purchase', data).then((res: any) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.shop.INVENTORY] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.point.BALANCE] });
    },
  });
};