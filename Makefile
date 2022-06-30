# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: rrhyhorn <rrhyhorn@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/10/08 18:58:28 by jarrakis          #+#    #+#              #
#    Updated: 2022/03/28 19:41:25 by rrhyhorn         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

NAME = push_swap

LIST =		ps_big_sort.c\
			ps_find_place.c\
			ps_init.c\
			ps_mini_sort.c\
			ps_operations.c\
			ps_operations2.c\
			ps_operations3.c\
			ps_quick_sort.c\
			ps_separate.c\
			ps_utils.c\
			ps_utils2.c\
			ps_validation.c\
			push_swap.c
			
OBJ = $(patsubst %.c, %.o, $(LIST))

FLAGS = -Wall -Wextra -Werror

all : $(NAME)

$(NAME) : $(OBJ)
	gcc $(FLAGS) $(OBJ) -o $(NAME)

%.o : %.c push_swap.h
	gcc $(FLAGS) -c $< -o $@

clean :
	rm -f $(OBJ)

fclean : clean
	rm -f $(NAME)

re : fclean all

.PHONY : all clean fclean re
